import { Account } from "./account";
import { Game } from "./game";

export class Comment{
    private _account :Account;
    private _game:Game;
    private _create_at:Date;
    private _content:string;
    private _up_votes:number;
    private _down_votes:number;

    public get account() :Account{
        return this._account;
    }

    public set account(account :Account) {
        this._account = account;
    }

    public get game(): Game{
        return this._game;
    }

    public set game(game: Game) {
        this._game = game;
    }

    public get create_at(): Date{
        return this._create_at;
    }

    public set create_at(create_at: Date) {
        this._create_at = create_at;
    }

    public get content(): string{
        return this._content;
    }

    public set content(content: string) {
        this._content = content;
    }

    public get up_votes(): number{
        return this._up_votes;
    }

    public set up_votes(up_votes: number) {
        this._up_votes = up_votes;
    }

    public get down_votes(): number {
        return this._down_votes;
    }

    public set down_votes(down_votes: number) {
        this._down_votes = down_votes;
    }


}