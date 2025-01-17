import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import './ItemDetailContainer.css';

function producto (id){
  const db = getFirestore();

  const itemRef = doc(db, 'items', id);

  return getDoc(itemRef);
    /*const myPromise = new Promise((resolve, reject) =>{
      const productsList = [
        {
          id: 1,
          title: 'Reloj Smartwatch Gadnic-RWS10',
          price: '$6.999',
          stock: 10,
          category: 'relojes',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/REL00191/1000x1000-REL00191.jpg&h=220'
        },
        {
          id: 2,
          title: 'Aspiradora Robot Gadnic-Z970',
          price: '$119.500',
          stock: 10,
          category: 'limpieza',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/ROB00091/1000x1000-ROB00091.jpg&h=220'
        },
        {
          id: 3,
          title: 'Reloj Smartwatch Gadnic-RW320',
          price: '$7.999',
          stock: 10,
          category: 'relojes',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/REL0153X/1000x1000-REL0153C.jpg&h=220'
        },
        {
          id: 4,
          title: 'Monitor Samsung 24"-F390',
          price: '$33.899',
          stock: 10,
          category: 'computacion',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/MON00008/1000x1000-MON00008.jpg&h=220'
        },
        {
          id: 5,
          title: 'Reloj Smartwatch Gadnic-LP67',
          price: '$9.949',
          stock: 10,
          category: 'relojes',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/REL00180/1000x1000-REL00180.jpg&h=220'
        },
        {
          id: 6,
          title: 'Humificador Ultrasónico Gadnic',
          price: '$4.249',
          stock: 10,
          category: 'limpieza',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/DIFU0001/1000x1000-DIFU0001.jpg&h=220'
        },
        {
          id: 7,
          title: 'Ozonizador de aire Gadnic',
          price: '$12.399',
          stock: 10,
          category: 'limpieza',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/2OZONO1X/1000x1000-2OZONO1N.jpg&h=220'
        },
        {
          id: 8,
          title: 'Notebook Asus X515',
          price: '$115.599',
          stock: 10,
          category: 'computacion',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/NOT00232/1000x1000-NOT00232.jpg&h=220'
        },
        {
          id: 9,
          title: 'Webcam USB Gadnic',
          price: '$4.199',
          stock: 10,
          category: 'computacion',
          image: 'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/CAMWEB02/1000x1000-CAMWEB02.jpg&h=220'
        }
        ];
      const item = productsList.filter(item => item.id === parseInt(id));
      setTimeout(() =>{
        resolve(item[0]);
      }, 2000);
    });
    return myPromise;*/
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        producto(id)
        .then(snapshot => {
            setItem({...snapshot.data(), id: snapshot.id});
        })
        .catch(err => {
            console.log(err);
        });
    }, [id]);

  return (
    <div className='itemDetailConteiner'>
        <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer