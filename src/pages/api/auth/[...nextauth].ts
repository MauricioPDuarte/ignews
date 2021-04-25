import { query as q } from 'faunadb';

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'   
    }),
  ],
  callbacks: {
      async signIn(user, account, profile) {
        const { email } = user;

        try {
            await fauna.query(
                // Verifica se já existe um usuário pelo email,
                // se não existir(not) faz:
                q.If(
                    q.Not(
                        q.Exists(
                            q.Match(
                                q.Index('user_by_email'),
                                q.Casefold(email)
                            )
                        )
                    ),
                    // Se verdadeiro, faz isso:
                    q.Create(
                        q.Collection('users'),
                        { data: { email }}
                    ),

                    // Se falso, faz isso:
                    q.Get(
                        q.Match(
                            q.Index('user_by_email'),
                            q.Casefold(email)
                        )
                    )
                ),
            )

            return true;
        }catch {
            return false;
        }

      }
  }
})
