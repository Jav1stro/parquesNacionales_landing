export const Regiones = (props) => {
    return (
      <div id='features' className='text-center'>
        <div className='container'>
          <div className=' section-title'>
            <h2>Features</h2>
          </div>
          <div className='regiones'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} >
                    {' '}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    )
  }
  