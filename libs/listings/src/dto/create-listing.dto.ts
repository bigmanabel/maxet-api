import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateListingDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    stockQuantity: number;

    @ApiProperty({ type: 'binary', format: 'string' })
    @IsOptional()
    image: string;

    @ApiProperty()
    @IsNotEmpty()
    shop: string;

    @ApiProperty()
    @IsNotEmpty()
    category: string;
}
