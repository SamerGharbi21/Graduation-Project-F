

export class SubscriptionType {
    public static readonly Monthly = new SubscriptionType(1000 * 60 * 24 * 30 * 60, 9.99,'MONTHLY');
    public static readonly Semiannual = new SubscriptionType(1000 * 60 * 24 * 30 * 6 * 60, 29.99,'SEMIANNUAL');
    public static readonly Annually = new SubscriptionType(1000 * 60 * 24 * 30 * 12 * 60, 54.99,'ANNUALLY');
    private readonly period: number;
    private readonly price: number;
    private readonly name :string;
    private constructor(period: number, price: number,name: string) {
        this.period = period;
        this.price = price;
        this.name = name;
    }

    getPeriod(): number {
        return this.period;
    }

    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }
}

