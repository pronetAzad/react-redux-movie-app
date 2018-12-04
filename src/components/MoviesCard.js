import React from 'react';
import {Card, Grid, Button, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const extra = (movie, onDeleteMoviesSubmit ) => {
    return (
        <div className="ui two buttons">
            <Button animated as={Link} to={`/movie/${movie._id}`}>
                <Button.Content visible>Edit</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right'/>
                </Button.Content>
            </Button>
            <Button animated='vertical' onClick={() => onDeleteMoviesSubmit(movie._id)}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                    <Icon name='trash'/>
                </Button.Content>
            </Button>
        </div>
    )
}

const MoviesCard = ({movies, onDeleteMoviesSubmit}) => (
    <Grid.Column>
        <Card>
            <Card image={movies.cover} header={movies.title} extra={extra(movies, onDeleteMoviesSubmit)}/>
        </Card>
    </Grid.Column>
)

export default MoviesCard