

export class SubscriptionType {
    public static readonly Monthly = new SubscriptionType(1000 * 60 * 24 * 30, 9.99);
    public static readonly Semiannual = new SubscriptionType(1000 * 60 * 24 * 30 * 6, 29.99);
    public static readonly Annually = new SubscriptionType(1000 * 60 * 24 * 30 * 12, 54.99);
    private readonly period: number;
    private readonly price: number;

    private constructor(period: number, price: number) {
        this.period = period;
        this.price = price;
    }

    getPeriod(): number {
        return this.period;
    }

    getPrice(): number {
        return this.price;
    }
}

