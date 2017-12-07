import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NotificationManager} from 'react-notifications';
import {PropTypes} from 'prop-types';

export default (Componente)=>{

    class Autenticar extends Component{
        
            componentWillMount(){
                if(!this.props.logged){
                    NotificationManager.error('Necesita esta logueado para acceder a las tareas','Error');
                    this.context.router.history.push('/login')
                }
            }
        
            render(){
                return(
                    <Componente {...this.props} />
                )
            }
        }
        
        Autenticar.propTypes = {
            logged: PropTypes.bool.isRequired
        }
        
        Autenticar.contextTypes = {
            router: PropTypes.object.isRequired
        }
        
        const mapStateToProps = (state) =>{
            return{
                logged: state.logged
            }
        }

        return connect(mapStateToProps)(Autenticar);
}
