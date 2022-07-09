// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Questo è un file per fare esclusivamente dei test 

import type { NextApiRequest, NextApiResponse } from 'next';

import {User} from "./../../../model/chat/User";
import {TextMessage} from "./../../../model/chat/TextMessage";
type Data = {
  name: TextMessage
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let user = new User("0","username");
  let message = new TextMessage(user,"Salve a tutti");
  
  //res.status(200).json({ name: user });
  res.send(message);

}
