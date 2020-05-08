import React from 'react'
import {ISingleMessage} from "../../types/i-single-message";
import {format} from "date-fns";
import {splitByPredicate} from "../../../common/utils/split-by-predicate";
import {IUserMessagesGroup} from "../../types/i-user-messages-group";
import {MessagesUserGroup} from '../messages-user-group/MessagesUserGroup';

interface IProps {
    date: Date;
    messages: ISingleMessage[]
}

export const MessagesDayGroup: React.FunctionComponent<IProps> = ({date, messages}) => {
    // если будет время, вынести всю эту стену кода в helper
    const splitPredicate = (currMsg: ISingleMessage, prevMsg: ISingleMessage) => currMsg.authorId !== prevMsg.authorId;
    const userGroupedMessagesArray = splitByPredicate(messages, splitPredicate); // [[msg1, msg2, msg3],[msg4],[msg5]]
    const userMessageGroups: IUserMessagesGroup[] = userGroupedMessagesArray.map(userMsgArray => (
        {
            user: {
                avatarUrl: userMsgArray[0].avatarUrl,
                authorId: userMsgArray[0].authorId,
                authorName: userMsgArray[0].authorName
            },
            messages: userMsgArray.map(msg => ({
                message: msg.message,
                date: msg.date
            }))
        }
    ));
    return (
        <div>
            <div className="date">{format(date, 'dd.MM.yyyy')}</div>
            {userMessageGroups.map(group => <MessagesUserGroup user={group.user} messages={group.messages}/>)}
        </div>
    );
};