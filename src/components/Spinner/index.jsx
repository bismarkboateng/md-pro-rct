import { LineWave } from  'react-loader-spinner'



export default function index({ message, spinner }) {
  return (
    <div className={spinner}>
        <LineWave
        height="100"
        width="100"
        color="#9e9d9d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
        />
        <p>{message}</p>
    </div>
  )
}
