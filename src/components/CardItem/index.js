// Write your code here.
import './index.css'

const BannerItem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <li className={className}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default BannerItem
