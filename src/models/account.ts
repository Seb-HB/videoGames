import { CollectionItem } from "./collectionItem";

export class Account{
    private _name: string;
    private _email: string;
    private _nickname: string;
    private _wallet :number;
    private _librairie:CollectionItem[];




    public get librairie(): CollectionItem[] {
        return this._librairie;
    }

    public set librairie(librairie: CollectionItem[]) {
        this._librairie = librairie;
    }
    public get name(): string{
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get email(): string{
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get nickname(): string{
        return this._nickname;
    }

    public set nickname(nickname: string) {
        this._nickname = nickname;
    }

    public get wallet() {
        return this._wallet;
    }

    public set wallet(wallet:number) {
        this._wallet = wallet;
    }




}