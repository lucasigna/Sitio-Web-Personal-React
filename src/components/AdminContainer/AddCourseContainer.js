import React, { useState } from 'react'
import Input from '@mui/joy/Input';
import { uploadData } from '../../firebase.js';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';

export const AddCourseContainer = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [courseData, setCourseData] = useState({
    title: '',
    date: '',
    place: '',
    credentialLink: ''
  });

  const alertUploadFinish = () => {
    Swal.fire({
      title: 'Perfecto!',
      text: 'Los datos fueron subidos correctamente',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
  
  const alertEmptyFields = () => {
    Swal.fire({
      title: 'Ojo al piojo!',
      text: 'Por favor, completa todos los campos',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  const sendData = async () => {
    setIsLoading(true)
    // Verificar que todos los campos estén completos
    if (
      courseData.title &&
      courseData.date &&
      courseData.place &&
      courseData.credentialLink
    ) {
      // Enviar datos a la base de datos
      const resp = await uploadData(courseData, `courses/${uuidv4()}`)
      if (resp) {
        setIsLoading(false)
        console.log('Datos subidos');
        alertUploadFinish()
      } else {
        console.error('Hubo un error');
        setIsLoading(false)
      }
    } else {
      console.log('Por favor, completa todos los campos');
      setIsLoading(false)
      alertEmptyFields()
    }
  };

  return (
    <div className='newAddContainer'>
        <Input
          placeholder="Título del curso"
          value={courseData.title}
          onChange={(event) =>
            setCourseData({ ...courseData, title: event.target.value })
          }
        />
        <Input
          placeholder="Fecha"
          value={courseData.date}
          onChange={(event) =>
            setCourseData({ ...courseData, date: event.target.value })
          }
        />
        <Input
          placeholder="Emisor del curso"
          value={courseData.place}
          onChange={(event) =>
            setCourseData({ ...courseData, place: event.target.value })
          }
        />
        <Input
          placeholder="Enlace a la credencial"
          value={courseData.credentialLink}
          onChange={(event) =>
            setCourseData({ ...courseData, credentialLink: event.target.value })
          }
        />
        {isLoading && <CircularProgress size={24} />}
        {!isLoading && <button className='btnAdmin btnAdminSend' onClick={sendData}>Enviar</button>}
    </div>
  )
}
