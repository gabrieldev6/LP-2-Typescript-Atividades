export enum CardValue {
    ACE=12,
    TWO=13,
    THREE=1,
    FOUR=2,
    FIVE=3,
    SIX=4,
    SEVEN=5,
    EIGHT=6,
    NINE=7,
    TEN=8,
    JACK=9,
    QUEEN=10,
    KING=11,
}
let value:number

export function cardValue(value:number) :void{
    this.value = value
}
export function getValue() {
    return value
}