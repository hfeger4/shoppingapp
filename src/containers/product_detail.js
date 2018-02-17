import React, {Component} from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
  position        : 'fixed',
  top             : 0,
  left            : 0,
  right           : 0,
  bottom          : 0,
  backgroundColor : 'rgba(0, 0, 0, 0.8)',
  zIndex          : 10
},
content : {
  position                   : 'fixed',
  height: "600px",
  width: "600px",
  top                        : '50%',
  left                       : '50%',
  border                     : '1px solid black',
  "transform"                : 'translate(-50%, -50%)',
  padding                    : '36px',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  outline                    : 'none',
  borderRadius               : '3px',
  zIndex          : 11,
  opacity         : 100,
  transition      : 'opacity 0.5s'
}
};

class ProductDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render(){
    if (this.state.modalIsOpen === undefined){
    this.openModal();
    }
    if(!this.props.product){
      return <div>product info displayed here</div>;
    }
    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Shop Modal">
        <div>
          <h3>Details for:</h3>
          <div>Name: {this.props.product.name}</div>
          <div>Price: {this.props.product.price}</div>
        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state){
  return{
    product: state.activeProduct
  };
}

export default connect(mapStateToProps)(ProductDetail);
