import {GraphQLList, GraphQLID} from 'graphql'
import { SongType } from './types.js'
import songs from '../cuartetoSongs.json' assert{type:"json"};

export const listAll= {
    type: new GraphQLList(SongType),
    resolve: async() => {
        return songs
    }
}

export const listSong= {
    type: SongType,
    description: 'Return a song',
    args:{
        id: {type: GraphQLID}
    },
    resolve: async(_, args) => {
        return songs;
    }
}