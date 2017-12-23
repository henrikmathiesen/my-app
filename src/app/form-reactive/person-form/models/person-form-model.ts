import { IPersonFormAddressModel } from './person-form-address-model';

export interface IPersonFormModel {
    firstName: string;
    lastName: string;
    nickName: string;
    address: IPersonFormAddressModel;
}
