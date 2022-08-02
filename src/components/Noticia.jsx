export const Noticia = (props) => {
    return (
        <div className="noticia">
        <img src={props.img} alt="img" />
        {/* <i className={d.icon}></i> */}
        <br />
        <span>{props.date}</span>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        </div>
    )
}
export default Noticia;