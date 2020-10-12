import React from 'react';
import {Table, Button, Container, Modal, FormGroup, Form } from 'react-bootstrap';
import Menu from './menu';
import axios from 'axios';
import {useState, useEffect} from 'react';
import s from '../../styles/adminCategories.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons';


const url = 'localhost:3001'


const Categorys = ()=> {
    const [date, setData] = useState([])
    const [form, setForm] = useState({
        name : "",
        description : "",
    })
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false)


    /*********************** Functions **************************** */
    const getCategory = () => {
        axios.get(`http://${url}/products/category`)
            .then(res => {
                if(res){
                    console.log(res.data.result)
                    return setData(res.data.result)
                }else{
                    console.log("No hay Datos")
                }
            })
            .catch(err => {
                console.log('Errod')
            })
        //console.log('hola')
    }

    useEffect(()=> {
        getCategory();
    }, [])

    const insertProduct = async () => {
        console.log('hola')
        await axios.post(`http://${url}/products/category`, form)
            .then(res => {
                console.log(res.data.data)
                // let dataNew = date
                // dataNew.push({...res.data.data})
                getCategory()
                setShow(false)
            })
    }
    const openModal = ()=> { setShow(true)  }
    const closeModal = ()=> { setShow(false)  }
    const closeModalUpdate = ()=> { setShowUpdate(false)  }
    const handlerChange = (e) => {  setForm({ ...form, [e.target.name]:e.target.value})  }

    const updateProductModal = (product)=> {
        console.log(product)
        let cont = 0;
        let list = date
        list.map((dat)=>{
            if(dat.id === product.id) {
                list[cont].name = product.name
                list[cont].description = product.description
                list[cont].price = product.price
                list[cont].stock = product.stock
                list[cont].category = product.category
            }
            cont++
        })
        setShowUpdate(true)
        setForm(product)
        setData(list)
    }

    const updateProduct = (dat)=>{
        axios.put(`http://${url}/products/category/${dat.id}`, dat)
            .then(dat => {
                setShowUpdate(false);
                getCategory();
            })
        // console.log(dat)
    }

    const deleteProduct = (id)=>{
        if(window.confirm('Are you sure remove this product?')){
            axios.delete(`http://${url}/products/category/${id}`)
                .then(dat => {
                    getCategory()
                })
        //     let list = date.filter((dt)=> {
        //         return dt.id !== id
        //     })
        //    return setData(list)
        }

    }

    return (
        <>
        {/* <Menu/> */}
        <div className={s.table_prin}>
            {/* <Menu/> */}
            <div>
            <Table striped bordered hover size="sm">
                    <thead className={s.tableTitle}>
                        <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th className={s.tableActions}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {date.map(dat => {
                            return (
                                <tr className={s.tableDescrip}>
                                    <td>{dat.name}</td>
                                    <td>{dat.description}</td>
                                    <td className={s.icons}>
                                    <FontAwesomeIcon icon={faPencilAlt} size={'1x'} className={s.iconUpdate} onClick={()=> updateProductModal(dat)} />
                                    <FontAwesomeIcon icon={faTrashAlt} size={'1x'} className={s.iconDelete} onClick={() => deleteProduct(dat.id)} />
                                        {/* <Button variant="danger" onClick={() => deleteProduct(dat.id)}>Delete</Button>{"  "}
                                        <Button variant="primary" onClick={()=> updateProductModal(dat)}>Update</Button> */}
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
            </Table>
            <Button className={s.buttonADD} onClick={openModal}>Add Category</Button>
            </div>
        </div>
        {/**************************** MODAL ADD ******************************** */}
        <div>
            <Modal
                show={show}
                backdrop="static"
                onHide={closeModal}
                keyboard={false}
                >
                    <Modal.Header closeButton className={s.title}>
                        Add Product
                    </Modal.Header>

                    <Modal.Body className={s.cont} >
                    <Form.Group>
                            <Form.Label className={s.titles} >Id:</Form.Label>
                            <input className={s.inputs} type="text" name="name" value={date.length+1} readOnly/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={s.titles} >Name:</Form.Label>
                            <input className={s.inputs} type="text" name="name"  onChange={handlerChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={s.titles} >Description:</Form.Label>
                            <input className={s.inputs} type="text" name="description" onChange={handlerChange}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer className={s.buttons}>
                        <Button className={s.buttonAdd} onClick={insertProduct}>Add</Button>
                        <Button className={s.buttonCancel} onClick={closeModal}>Cancel</Button>
                    </Modal.Footer>
            </Modal>
        </div>
        <div>
        <Modal
                show={showUpdate}
                backdrop="static"
                onHide={closeModalUpdate}
                keyboard={false}
                >
                    <Modal.Header closeButton className={s.title}>
                        Update Category
                    </Modal.Header>

                    <Modal.Body className={s.cont}>
                    <Form.Group>
                            <Form.Label className={s.titles}>Id:</Form.Label>
                            <input className={s.inputs} type="text" name="name"  readOnly value={form.id} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={s.titles}>Name:</Form.Label>
                            <input className={s.inputs} type="text" name="name"  onChange={handlerChange} value={form.name}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={s.titles}>Description:</Form.Label>
                            <input className={s.inputs} type="text" name="description" onChange={handlerChange} value={form.description}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer className={s.buttons}>
                        <Button className={s.buttonAdd} onClick={() => updateProduct(form)}>Update</Button>
                        <Button className={s.buttonCancel} onClick={closeModalUpdate}>Cancel</Button>
                    </Modal.Footer>
            </Modal>
        </div>
        </>
    )
}
export default Categorys