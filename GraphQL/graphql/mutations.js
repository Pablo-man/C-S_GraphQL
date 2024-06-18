import {GraphQLString} from 'graphql';
import _ from 'underscore';
import songs from '../cuartetoSongs.json' assert{type:"json"};

export const register={
    type: GraphQLString,
    description: "Register new song",
    args: {
        title: {type: GraphQLString},
        albun: {type: GraphQLString}
    },
    resolve: async (_, args) => {
        const {title, albun}= args;
        const id= songs.length + 1;
        if(title && albun){
            const newSong= {...args, id};
            songs.push(newSong);
            return "successfull"
        }
        else{
            return "there was an error"
        }
    }
}