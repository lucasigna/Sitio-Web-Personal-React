import { Input } from '@mui/joy';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { uploadData, uploadImage} from '../../firebase.js';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';

export const AddProjectContainer = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    githubLink: '',
    websiteLink: '',
    technologies: '',
    urlImage: ''
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

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
      projectData.title &&
      projectData.description &&
      projectData.githubLink &&
      projectData.websiteLink &&
      projectData.technologies &&
      selectedImage
    ) {
      const url = await uploadImage(selectedImage)
      while(url == null){}
      setProjectData({ ...projectData, urlImage: url })
      url = null
      // Enviar datos a la base de datos
      const resp = await uploadData(projectData, `projects/${uuidv4()}`)
      if (resp) {
        setIsLoading(false)
        console.log('Datos subidos');
        alertUploadFinish()
        setProjectData({
          title: '',
          description: '',
          githubLink: '',
          websiteLink: '',
          technologies: '',
          urlImage: ''
        })
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
        placeholder="Título del proyecto"
        value={projectData.title}
        onChange={(event) =>
          setProjectData({ ...projectData, title: event.target.value })
        }
      />
      <Input
        placeholder="Descripción"
        value={projectData.description}
        onChange={(event) =>
          setProjectData({ ...projectData, description: event.target.value })
        }
      />
      <Input
        placeholder="Tecnologías"
        value={projectData.technologies}
        onChange={(event) =>
          setProjectData({ ...projectData, technologies: event.target.value })
        }
      />
      <Input
        placeholder="Link Github"
        value={projectData.githubLink}
        onChange={(event) =>
          setProjectData({ ...projectData, githubLink: event.target.value })
        }
      />
      <Input
        placeholder="Link Sitio Web"
        value={projectData.websiteLink}
        onChange={(event) =>
          setProjectData({ ...projectData, websiteLink: event.target.value })
        }
      />
      {previewImage && (
        <img src={previewImage} alt="Vista previa de la imagen" className='imageProject' />
      )}
      <input
        type="file"
        id="upload-image"
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <label htmlFor="upload-image">
        <Button variant="contained" component="span">
          Cargar imagen
        </Button>
      </label>
      {isLoading && <CircularProgress size={24} />}
      {!isLoading && <button className='btnAdmin btnAdminSend' onClick={sendData}>Enviar</button>}
    </div>
  );
};
