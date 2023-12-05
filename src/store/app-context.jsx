import { createContext, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { app, db } from "../utils/firebaseConfig"


export const AppContext = createContext({})

export const AppContextProvider = (props) => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [articles, setArticles] = useState([])
    const [tagArticles, setTagArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const collectionRef = collection(db, "Articles")
    const tagCollectionRef = collection(db, "Tag")

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
            setIsLoading(false)
        }
        fetchArticles()
    }

    const onFetchTagArticlesHandler = () => {
        setIsLoading(true)
        async function fetchTagArticles() {
            const tagArticleSnapshot = await getDocs(tagCollectionRef)
            tagArticleSnapshot.docs.forEach((doc) => {
                setTagArticles(prevTagArticle => [...prevTagArticle, { ...doc.data(), id: doc.id}])
            })
            setIsLoading(false)
        }
        fetchTagArticles()
    }

    return (
        <AppContext.Provider
            value = {{
                isSignInModalOpen,
                onSignInClickHandler,
                articles,
                onFetchArticles,
                onFetchTagArticlesHandler,
                tagArticles,
                isLoading,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}