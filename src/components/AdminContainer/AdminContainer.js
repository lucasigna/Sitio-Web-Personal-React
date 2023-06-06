import React, { useState } from 'react'
import './AdminContainer.scss';
import { AddCourseContainer } from './AddCourseContainer';
import { AddProjectContainer } from './AddProjectContainer';
import { Input } from '@mui/joy';
import { isAdminLogin, loginAdmin } from '../../firebase';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';
import { logout as logoutAdmin } from './../../firebase';
import { AdminCoursesAndProjectsContainer } from './AdminCoursesAndProjectsContainer';

export const AdminContainer = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [showAddCourse, setShowAddCourse] = useState(false);
    const [showAddProject, setShowAddProject] = useState(false);
    const [showAdminData, setShowAdminData] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [loginData, setLoginData] = useState({
        mail: '',
        pass: '',
      });

    const checkAdmin = async () => {
        const resp = await isAdminLogin()
        setIsLogin(resp)
    }

    useEffect( () => {
        checkAdmin()
    },[])

    const alertLoginSucess = () => {
        Swal.fire({
          title: 'Perfecto!',
          text: 'Iniciaste sesión',
          icon: 'success',
          confirmButtonText: 'OK'
        })
    }

    const alertLoginFail = () => {
        Swal.fire({
          title: 'Datos incorrectos',
          text: 'El mail o contraseña están mal',
          icon: 'error',
          confirmButtonText: 'OK'
        })
    }

    const handleButton1Click = () => {
        setShowAddCourse(true);
        setShowAddProject(false);
    };

    const handleButton2Click = () => {
        setShowAddCourse(false);
        setShowAddProject(true);
    };
    
    const logout = async () => {
        await logoutAdmin()
        const resp = await isAdminLogin()
        setIsLogin(resp)
    };

    const sendLogin = async () => {
        setIsLoading(true)
        const resp = await loginAdmin(loginData.mail, loginData.pass)
        if (resp) {
            alertLoginSucess()
            setIsLogin(true)
        } else {
            alertLoginFail()
        }
        setIsLoading(false)
    }

    const adminCoursesAndProjects = () => {
        setShowAdminData(true)
    }

    return (
        <div className="adminContainer">
            {!isLogin && 
            <div className="loginContainer">
                <Input
                    placeholder="Mail"
                    value={loginData.mail}
                    onChange={(event) =>
                        setLoginData({ ...loginData, mail: event.target.value })
                    }
                    type='email'
                />
                <Input
                    placeholder="Contraseña"
                    value={loginData.pass}
                    onChange={(event) =>
                        setLoginData({ ...loginData, pass: event.target.value })
                    }
                    type='password'
                />
                {isLoading && <CircularProgress size={24} />}
                {!isLoading && <button className='btnAdmin btnAdminSend' onClick={sendLogin}>Ingresar</button>}
            </div>
            }
            {isLogin && !showAddCourse && !showAddProject && !showAdminData && (
                <div className="btnContainer">
                    <button className="btnAdmin" onClick={adminCoursesAndProjects}>
                        Administrar cursos y proyectos
                    </button>
                    <button className="btnAdmin" onClick={handleButton1Click}>
                        Agregar un curso
                    </button>
                    <button className="btnAdmin" onClick={handleButton2Click}>
                        Agregar un proyecto
                    </button>
                    <button className="btnAdmin" onClick={logout}>
                        Cerrar sesión
                    </button>
                </div>
            )}
            {isLogin && (showAddCourse || showAddProject || showAdminData) && (
                <div className="btnContainer">
                    <button className='btnAdmin btnAtras' onClick={() => {
                        setShowAddCourse(false);
                        setShowAddProject(false);
                        setShowAdminData(false)
                    }}><span>&larr;</span> Atrás</button>
                </div>
            )}
            {isLogin && showAddCourse && <AddCourseContainer />}
            {isLogin && showAddProject && <AddProjectContainer />}
            {isLogin && showAdminData && <AdminCoursesAndProjectsContainer />}
        </div>
    )
}
