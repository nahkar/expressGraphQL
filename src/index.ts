import * as dotenv from 'custom-env';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import schema from './schema/schema';

dotenv.env(process.env.NODE_ENV);

const app = express();
app.use('/graphql', graphqlHTTP({ schema }));

app.listen(process.env.PORT, () => console.warn(`Server started on port ${process.env.PORT}`));
