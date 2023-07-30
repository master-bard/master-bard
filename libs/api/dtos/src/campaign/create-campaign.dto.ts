import { IsString, IsOptional, Length, IsNotEmpty } from 'class-validator';

export class CreateCampaignDto {

	@IsString()
	@IsNotEmpty()
	@Length(1, 255)
	name!: string;

	@IsString()
	@IsOptional()
	@Length(1, 255)
	description?: string;

}