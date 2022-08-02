import Noticia from './Noticia'

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Noticias</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  <Noticia
                  img={d.image}
                  title={d.title}
                  text={d.text}
                  date={d.date}
                  />
                  {' '}

                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
