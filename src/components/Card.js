function Card({image}) {
  const tags = image.tags.split(',');
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        className="w-full"
        alt="Random Image"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl">
          Photo by {image.user}
        </div>
        <ul>
          <li>
              <strong>Views:{image.views}</strong>
          </li>
          <li>
              <strong>Downloads:{image.downloads}</strong>
          </li>
          <li>
              <strong>Likes:{image.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map( (tag,index)=>(
          <span key={index} className="inline-block my-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
        ))}
       
      </div>
    </div>
  );
}
export default Card;
