const router = require('express').Router();

const {
    addThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId')
    .delete(removeThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

router.route('/:userId/:thoughtId/:replyId').delete(removeReaction);

module.exports = router;