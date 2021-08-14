import { Genre } from "./genre";
import { Langage } from "./langage";

export class Game{
    private _name: string;
    private _published_at:Date;
    private _price: number;
    private _thumbnail_cover: string;
    private _thumbnail_logo: string;
    private _langages:Langage[];
    private _genres: Genre[];




    public get genres(): Genre[] {
        return this._genres;
    }

    public set genres(genres: Genre[]) {
        this._genres = genres;
    }
 
    public get langages(): Langage[] {
        return this._langages;
    }

    public set langages(langages: Langage[]) {
        this._langages = langages;
    }

    public get name(): string{
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get published_at(): Date{
        return this._published_at;
    }

    public set published_at(published_at: Date) {
        this._published_at = published_at;
    }

    public get price(): number{
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

    public get thumbnail_cover(): string{
        return this._thumbnail_cover;
    }

    public set thumbnail_cover(thumbnail_cover: string) {
        this._thumbnail_cover = thumbnail_cover;
    }

    public get thumbnail_logo(): string{
        return this._thumbnail_logo;
    }

    public set thumbnail_logo(thumbnail_logo: string) {
        this._thumbnail_logo = thumbnail_logo;
    }


}