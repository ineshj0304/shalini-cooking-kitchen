export default function Home() {
  return (
    <div style={{fontFamily:'Arial',background:'#111',color:'#fff',padding:'40px',minHeight:'100vh'}}>
      <h1 style={{color:'#d4af37'}}>Shalini Cooking Kitchen</h1>
      <p>Luxury homemade recipes with love and tradition.</p>
      <a href="https://youtube.com/@shalinifoodhub?si=BTbF1B-sXSRPReYM" target="_blank">Visit YouTube Channel</a>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px',marginTop:'40px'}}>
        {[
          {id:'7nV6i2Q1xkA',title:'Recipe 1'},
          {id:'Fw4pQKZ0G8M',title:'Recipe 2'},
          {id:'TQxWmK7bA2Q',title:'Recipe 3'}
        ].map((video)=>(
          <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" style={{textDecoration:'none',color:'#fff'}}>
            <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} style={{width:'100%',borderRadius:'12px'}} />
            <h3>{video.title}</h3>
          </a>
        ))}
      </div>
    </div>
  )
}
