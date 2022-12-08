import {Query, Mutation, Resolver, Args} from "@nestjs/graphql"
import {Reminder} from "../model/reminder.model";
import {ReminderService} from "../service/reminder.service";
import {ReminderInput} from "../input/reminder.input";
import {ReminderDto} from "../dto/reminder.dto";
import {SearchCriteriaDto} from "../../core/dto/search-criteria.dto";

@Resolver(of => Reminder)
export class ReminderResolver {
    constructor(private reminderService: ReminderService) {
    }

    @Query(returns => Reminder)
    async reminder(@Args('id') id: string) {
        const reminder = await this.reminderService.findById(id);
        return new Reminder(reminder);
    }

    @Query(returns => [Reminder])
    async searchReminder(@Args('searchCriteria', {nullable: true}) searchCriteria?: SearchCriteriaDto) {
        return await this.reminderService.search(searchCriteria);
    }

    @Mutation(returns => Reminder)
    async createReminder(@Args('reminder') reminder: ReminderInput) {
        const reminderDto = new ReminderDto();
        Object.keys(reminder).forEach(field => reminderDto[field] = reminder[field]);
        const document = await this.reminderService.create(reminderDto);
        return new Reminder(document);
    }
}