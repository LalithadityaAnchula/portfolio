export default function WordCard({ title, content, discription, imageName }) {
  return (
    <div className="card">
      <div className="wrap">
        <div className="card-image">
          <img src={require(`../../images/${imageName}`)} alt="not available" />
        </div>
        <div className="content">
          <div className="card-title">{title}</div>
          <div className="work-details">{content}</div>
          <br />
          <div className="work-discription">
            <p>{discription}</p>
          </div>
        </div>
      </div>
      <br />
      <div className="card-footer"></div>
    </div>
  );
}
