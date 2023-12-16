import Model from './model.js';
import Repository from '../models/repository.js';
import UserModel from './user.js';


export default class PhotoLike extends Model {
    constructor() {
        super();

        this.addField('ImageId', 'string');
        this.addField('UserId', 'string');
    }

    bindExtraData(instance) {
        instance = super.bindExtraData(instance);
        let usersRepository = new Repository(new UserModel());
        instance.Owner = usersRepository.get(instance.UserId);
        instance.OwnerName = instance.Owner.Name;
        return instance;
    }
}