const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
       reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
       },
       reactionBody: {
        type: String,
        required: true,
        max: [280, 'Reaction is too long!']
       },
       username: {
        type: String,
        required: true
       },
       createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
       }
    },
    {
        toJSON: {
            getters: true
        }
    }
) 

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: [1, 'Must contain a thought'],
            max: [280, 'Thought is too long.']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
 );

 ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
 });

 const Thought = model('Thought', ThoughtSchema);

 module.exports = Thought;