import React,{Component} from 'react';
import  {Form,FormGroup,Button,ControlLabel,FormControl,Checkbox,Grid,Row,Col} from 'react-bootstrap';


class Formulario extends Component{
    render(){
        return(
        <Grid>
            <Row className="show-grid">
              <Col xs={3} md={3}></Col>
              <Col xs={6} md={6}>
                <Form horizontal sm={6}>
                    <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                    </FormGroup>
        
                    <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                    </FormGroup>
        
                    <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Recordarme</Checkbox>
                    </Col>
                    </FormGroup>
        
                    <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" bsStyle="primary">
                        Iniciar Sesion
                        </Button>
                    </Col>
                    </FormGroup>
                </Form>
              </Col>
            </Row>
        </Grid>
            
        )
    }
}

export default Formulario