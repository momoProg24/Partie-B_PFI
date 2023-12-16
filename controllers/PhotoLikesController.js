import Authorizations from '../authorizations.js';
import Repository from '../models/repository.js';
import Controller from './Controller.js';
import PhotoLikeModel from '../models/photoLike.js';


export default
    class PhotoLikes extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new PhotoLikeModel()), Authorizations.user());

    }

}