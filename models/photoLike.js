import Model from './model.js';


export default class PhotoLikeModel extends Model {
    constructor() {
        super();

        this.addField('ImageId', 'string');
        this.addField('NumberLike', 'integer');
        this.addField('PeopleLikeId', 'string');
              
        this.setKey("ImageId");
    }
}