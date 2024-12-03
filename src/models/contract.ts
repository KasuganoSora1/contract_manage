import {BaseEntity, Column,Entity,PrimaryGeneratedColumn} from "typeorm"
import "reflect-metadata"
@Entity()
class contract extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    contract_id!:string;
    @Column()
    contract_name!:string;
    @Column()
    contract_index!:string;
    @Column()
    price!:number;
    constructor(contract_name:string,contract_index:string,price:number){
        super();
        this.contract_name=contract_name;
        this.contract_index=contract_index;
        this.price=price;
    }
}
const c=new contract('name','111',33333);
console.log(c);