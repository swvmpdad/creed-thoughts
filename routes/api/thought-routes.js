const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/')
    .get(getAllThoughts);

router.route('/:id')
    .get(getThoughtById);

router.route('/:userId')
    .post(addThought);

router.route('/:id')
    .put(updateThought);

router.route('/:userId/:thoughtId')
    .delete(removeThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

router.route('/:userId/:thoughtId/:replyId')
    .delete(removeReaction);

module.exports = router;