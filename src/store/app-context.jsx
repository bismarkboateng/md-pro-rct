import { createContext, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { app, db } from "../utils/firebaseConfig"



// const ModalContext = createContext({
//     isSignInModalOpen: false,
//     onSignInClickHandler: () => {},
// })

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [articles, setArticles] = useState([])
    // const [trendingArticles, setTrendingArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const collectionRef = collection(db, "Articles")

    const  onSignInClickHandler = () => {
        setIsSignInModalOpen(prevState => !prevState)
    }

    const onFetchArticles = () => {
        setIsLoading(true)
        async function fetchArticles() {
            const articleSnapshot = await getDocs(collectionRef)
            articleSnapshot.docs.forEach((doc) => {
                setArticles(prevArticle => [...prevArticle, { ...doc.data(), id: doc.id}])
            })
            // articleSnapshot.docs.forEach((doc) => {
            //     if(doc.data().trending) {
            //         setTrendingArticles(prevTrendArticle => [...prevTrendArticle, { ...doc.data(), id: doc.id}])
            //     }
            // })
            setIsLoading(false)
        }
        fetchArticles()
    }

    return (
        <AppContext.Provider
            value = {{
                isSignInModalOpen,
                onSignInClickHandler,
                articles,
                // trendingArticles,
                onFetchArticles,
                isLoading,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}