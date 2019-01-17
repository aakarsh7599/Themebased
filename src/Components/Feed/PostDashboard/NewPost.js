import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Button, Form, TextArea, Responsive,Dropdown } from 'semantic-ui-react';
import './NewPost.css';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        const styling = {
            position: "right",
        };
        let tagOptions = [ { key: 'java', value: 'java', text: 'Java' }, 
                             { key: 'python', value: 'python', text: 'Python' },
                             { key: 'javascript', value: 'javascript', text: 'JavaScript' }]
        return (
            <section>
               {/* <h1>React-Modal Examples</h1>*/}
                <button class="ui blue align inverted button" onClick={() => this.openModal()}>NewPost</button>                
                <Modal 
                    visible={this.state.visible}
                    width="800"
                    height="600"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <div class="heading"><h1>New Post</h1></div>
                        <div class="adjust">
                        <Button.Group>
                            <Button positive>Post</Button>
                            <Button.Or text='or' />
                            <Button onClick={() => this.closeModal()}>cancel</Button>
                        </Button.Group>
                        </div>
                        <Form>
                        <div class='tarea'>
                        <TextArea placeholder='Try adding multiple lines' style={{ minHeight: 400 }} />
                        </div>
                        </Form>
                        <Dropdown placeholder='Tags' fluid multiple search selection options={tagOptions} />
                    </div>
                </Modal>
            </section>
        );
     }
}

export default NewPost;