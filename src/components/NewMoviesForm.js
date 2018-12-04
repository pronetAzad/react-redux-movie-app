import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Image, Message} from 'semantic-ui-react';
import InlineError from './InlineError';
import { Redirect } from 'react-router-dom';

export default class NewMoviesForm extends Component {

    state = {
        _id:   this.props.movie ? this.props.movie._id   : '',
        title: this.props.movie ? this.props.movie.title : '',
        cover: this.props.movie ? this.props.movie.cover : '',
        redirect: false,
        errors: {}
    };

    static propTypes = {
        onNewMovieSubmit: PropTypes.func.isRequired
    }

    componentWillReceiveProps = (nextProps) => {

        const { movie } = nextProps.newMovie;

        if(movie.title && movie.title !== this.state.title)
        {
            this.setState({
                title: movie.title,
                cover: movie.cover,
            });
        }
    }
    

  

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        const errors = this.validator();

        this.setState({
            errors,
            redirect: true
        });

        const _id = this.state._id || this.props.newMovie.movie._id;

        if (Object.keys(errors).length === 0) {
            if(!_id)
                this.props.onNewMovieSubmit(this.state);
            else
                this.props.onUpdateMovieSubmit({...this.state, _id});
        }
    };

    validator = () => {
        const errors = {};
        if (!this.state.title) 
            errors.title = "Vacib sahedi";
        if (!this.state.cover) 
            errors.cover = "Vacib sahedi";
        return errors;
    }

    render() {

        const {errors} = this.state;
        const form = (
                <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
                    <Form.Field error={!!errors.title}>
                        <label>Title</label>
                        {errors.title && <InlineError message={errors.title}/>}
                        <input
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder='Title'/>
                    </Form.Field>
                    <Form.Field error={!!errors.cover}>
                        <label>Cover URL</label>
                        {errors.cover && <InlineError message={errors.cover}/>}
                        <input
                            id="cover"
                            name="cover"
                            value={this.state.cover}
                            onChange={this.handleChange}
                            placeholder='Cover URL'/>
                    </Form.Field>
                    <Image src={this.state.cover} size='small'/>
                    <div className="clearfix"></div>
                    <Button type='submit'>Submit</Button>

                    {this.props.newMovie.error.response && (
                        <Message negative>
                            <Message.Header>We're Sorry</Message.Header>
                            <p>That offer has expired</p>
                        </Message>
                    )
                    }
                </Form>
                );

        return (
            <div>
                { this.props.newMovie.done && this.state.redirect ? <Redirect to="/movies" /> : form }
            </div>
        )
    }
}
