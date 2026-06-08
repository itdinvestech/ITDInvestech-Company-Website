const DEFAULT_ENDPOINT = 'http://127.0.0.1:8001/graphql/'

export interface ContactFormPayload {
  name: string
  email: string
  company?: string
  subject: string
  message: string
  honeypot?: string
}

export interface ContactFormResult {
  success: boolean
  errors: string[]
}

function graphqlEndpoint() {
  return (import.meta.env.VITE_GRAPHQL_ENDPOINT || DEFAULT_ENDPOINT).trim()
}

export async function submitContactForm(payload: ContactFormPayload): Promise<ContactFormResult> {
  const response = await fetch(graphqlEndpoint(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        mutation submitWebsiteContact(
          $name: String!
          $email: String!
          $subject: String!
          $message: String!
          $company: String
          $honeypot: String
        ) {
          submitWebsiteContact(
            name: $name
            email: $email
            subject: $subject
            message: $message
            company: $company
            honeypot: $honeypot
          ) {
            success
            errors
          }
        }
      `,
      variables: {
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
        company: payload.company || null,
        honeypot: payload.honeypot || null,
      },
    }),
  })

  if (!response.ok) {
    throw new Error(`Contact service unavailable (${response.status})`)
  }

  const body = await response.json()
  if (body.errors?.length) {
    throw new Error(body.errors.map((row: { message?: string }) => row.message).join(', '))
  }

  const result = body.data?.submitWebsiteContact
  return {
    success: Boolean(result?.success),
    errors: result?.errors || [],
  }
}
