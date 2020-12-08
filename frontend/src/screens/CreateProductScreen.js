import React, { useEffect, useState }from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import axios from 'axios'

export default class CreateProduct extends React.Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
        this.onChangeLongDescription = this.onChangeLongDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            brand: '',
            category: '',
            price: '',
            shortDescription: '',
            longDescription: '',
            multerImage: ''
        }
    }

    setDefaultImage = (uploadType) => {
        if(uploadType === "multer") {
            this.setState({
                multerImage: ''
            })
        }
    }

    // uploadImage(e, method) {
    //     let imageObj = {}

    //     if (method === "multer") {
    //         let imageFormObj = new FormData()

    //         imageFormObj.append("imageName", "multer-image-" + Date.now())
    //         imageFormObj.append("imageData", e.target.files[0])
    //     }

    //     this.setState({
    //         multerImage: URL.createObjectURL(e.target.files[0])
    //     })

    //     axios.post(`${API_URL}/image/uploadmulter`, imageFormObj)
    //         .then((data) => {
    //             if (data.data.success) {
    //                 alert("Success")
    //                 this.setDefaultImage("multer")
    //             }
    //         })
    //         .catch((err) => {
    //             alert("error")
    //             this.setDefaultImage("multer")
    //         })
    // }

    onChangeName = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeBrand = (e) => {
        this.setState({ brand: e.target.value })
    }

    onChangeCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    onChangePrice = (e) => {
        this.setState({ category: e.target.value })
    }

    onChangeShortDescription = (e) => {
        this.setState({ shortDescription: e.target.value })
    }

    onChangeLongDescription = (e) => {
        this.setState({ longDescription: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const productObject = {
            name: this.state.name,
            brand: this.state.brand,
            category: this.state.category,
            price: this.state.price,
            shortDescription: this.state.shortDescription,
            longDescription: this.state.longDescription
        };

        console.log(productObject)

        axios.post('api/products', productObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

        this.setState({ name: '', brand: '', category: '', shortDescription: '', longDescription:'' })
    }


    render() {
        return (
            <div>
            <h1>Create Product</h1>
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onChangeName} value={this.state.name} type="text" placeholder="Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control onChange={this.onChangeBrand} value={this.state.brand} type="text" placeholder="Brand" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control onChange={this.onChangeCategory} value={this.state.category} type="text" placeholder="Category" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={this.onChangePrice} value={this.state.category} type="text" placeholder="Price" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control onChange={this.onChangeShortDescription} value={this.state.shortDescription} type="text" placeholder="Short Description" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Long Description</Form.Label>
                    <Form.Control onChange={this.onChangeLongDescription} value={this.state.longDescription} type="text" placeholder="Long Description" />
                    </Form.Group>
                </Form.Row>

                <input type="file" onChange={(e) => this.uploadImage(e, "multer")}></input>
                <img src={this.state.multerImage}/>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}