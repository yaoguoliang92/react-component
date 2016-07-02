import React from 'react';
import {Modal} from './index.js';

export default class ModalDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: false,
            display1: false,
            display2: false
        };
    }
    
    handleConfirm(){
        return confirm('close modal?');
    }

    handleCancel(){
        return true;
    }

    handleConfirm1(){
        alert('confirmed');
        return true;
    }

    showModal(stat){
        this.setState({
            [String(stat)]: true, 
        });
    }

    handleClose(){
        this.setState({
            display: false, 
            display1: false, 
            display2: false, 
            display3: false
        });
    }

    render() {
        const content = <div>
                            <h4>this is content</h4>
                            <p>This is a modal window. You can do the following things with it:</p>
                            <ul>
                                <li>Read: modal windows will probably tell you something important so don't forget to read what they say.</li>
                                <li>Look: a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                                <li>Close: click on the button to close the modal.</li>
                                <li>
                                    <a href="http://braavos.me" target="_blank">blog</a>
                                </li>
                            </ul>
                        </div>
        return (
            <div>
                <h3>Modal</h3>
                <ol>
                    <li>
                        <h4>Default modal</h4>
                        <button onClick={this.showModal.bind(this, 'display')}>click</button>
                        <Modal title={<h4>Confirm deleted</h4>} onClose={this.handleClose.bind(this)} display={this.state.display}>
                            {content}
                        </Modal>
                        <pre>
                            <code>
{`
<Modal title={<h4>Confirm deleted</h4>} onClose={handleClose} display={display}>
    ...
</Modal>
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Modal with confirm, cancel action</h4>
                        <button onClick={this.showModal.bind(this, 'display1')}>click</button>
                        <Modal display={this.state.display1} onClose={this.handleClose.bind(this)} 
                            onConfirm={this.handleConfirm.bind(this)} onCancel={this.handleCancel.bind(this)}>
                            {content}
                        </Modal>
                        <pre>
                            <code>
{`
<a href="#" onClick={this.setState({display: !this.state.display});}>click</a>
<Modal display={display} onClose={handleClose} 
    onConfirm={handleConfirm} onCancel={handleCancel}>
    {content}
</Modal>
`}                                 
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Modal with only confirm action</h4>
                        <button onClick={this.showModal.bind(this, 'display2')}>click</button>
                        <Modal display={this.state.display2} onClose={this.handleClose.bind(this)}
                            onConfirm={this.handleConfirm1.bind(this)} closeIcon={<p>关闭</p>}>
                            {content}
                        </Modal>
                        <pre>
                            <code>
{`
<a href="#" onClick={this.setState({display: !this.state.display});}>click</a>
<Modal display={display} onClose={handleClose}
    onConfirm={handleConfirm} closeIcon={<p>关闭</p>}>
    {content}
</Modal>   
`}                                
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h4>Modal force to close</h4>
                        <button onClick={this.showModal.bind(this, 'display3')}>click</button>
                        <Modal display={this.state.display3} force={true} onClose={this.handleClose.bind(this)}
                            onConfirm={this.handleConfirm1.bind(this)}>
                            {content}
                        </Modal>
                        <pre>
                            <code>
{`
<a href="#" onClick={this.setState({display: !this.state.display});}>click</a>
<Modal display={display} force={true} onClose={handleClose}
    onConfirm={handleConfirm}>
    {content}
</Modal>
`}                                
                            </code>
                        </pre>
                    </li>
                </ol>
            </div>
        );
    }
}
