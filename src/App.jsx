import "./App.css";
import React from 'react';



//arama kutucuğunun bileşenini oluşturduk
function Arama({aramaMetni, onSearch, }){
 
  function handleChange(event){
    setAramaMetni(event.target.value)
    //ekrana yazdırma
     props.onSearch(event);
     localStorage.setItem("aranan", event.target.value);  //ekranda ne yazasrsan onu yerel depolama birimine yaz diyoer
  }
  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni); 
  },[aramaMetni]);
    return(
    <div>     
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni}   />  
      <p>
        
      </p>
      </div>
  )
}



function Yazi({id, url, baslik, yazar, yorum_sayisi, puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
        </li>
  )
}




//ilk baştakinden farkı yok ekran olarak. Daha esnek bir yapı ile oluşturduk
function Liste(props) {    //bu function bir bileşen, javadaki class gibi düşün. Liste isminde bir bileşen
  return(
  <ul>
   {props.yazilar.map(function (yazi){
    return (
    
    <Yazi key={yazi.id} {...yazi}/>
    );
   })}

  </ul>

  )                     
}





function App() {
  const [aramaMetni, setAramaMetni] = React.useState(localStorage.getItem("aranan") ||  "React");

  const yaziListesi = [
    {  
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },

    {
      baslik: "Python Programlama Temelleri",
      url: "www.python.org",
      yazar: "Ayşe Demir",
      yorum_sayisi: 10,
      puan: 4.5,
      id: 2
    },

    {
      baslik: "Mobil Uygulama Geliştirme İpuçları",
      url: "www.developer.apple.com",
      yazar: "Mehmet Yılmaz",
      yorum_sayisi: 5,
      puan: 4.0,
      id: 3
    },

    {
      baslik: "Veri Analizi ve Büyük Veri",
      url: "www.analyticsvidhya.com",
      yazar: "Zeynep Kaya",
      yorum_sayisi: 8,
      puan: 4.8,
      id: 4
    },

    {
      baslik: "Frontend Geliştirme İçin Temel Kavramlar",
      url: "www.w3schools.com",
      yazar: "Ahmet Can",
      yorum_sayisi: 15,
      puan: 4.2,
      id: 5
    },

    {
      baslik: "Web Geliştirme Trends 2023",
      url: "www.techradar.com",
      yazar: "Eren Aksoy",
      yorum_sayisi: 12,
      puan: 4.7,
      id: 6
    },
    
  ];

  const arananYazilar = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase()) 
    );
  });




//1. asama :callback metodu olusturma
  function handleSearch(event){
   setAramaMetni(event.target.value);
  }

  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni}  onSearch = {handleSearch} />  
      <strong>{aramaMetni} araniyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </div>
  );
  //props tanımlamışım listede. props konusu önemli

  //odev => yazar da search edilecek, githuba koyulacak 
}
export default App;