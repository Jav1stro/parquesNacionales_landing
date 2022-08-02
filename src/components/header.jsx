export const Header = (props) => {
  return (
    <header id="header">
      <img src='img/bariloche.jpg' className='imgHeader' alt='' />{' '}
      <div className="containerHeader">
          <h1>
            {props.data ? props.data.title : "Loading"}
            <span></span>
          </h1>
          <p>{props.data ? props.data.paragraph : "Loading"}</p>
          <a href="#features" className="btn btn-custom btn-lg page-scroll">
            Mapa de los parques nacionales{" "}
          </a>{" "}
        </div>
    </header>
  );
};
