## Tables:
| TABLE    |          |                         |                  |                 |            |
|----------|----------|-------------------------|------------------|-----------------|------------|
| messages | id: uuid | created_at: timestamptz | sender: uuid     | recipient: uuid | data: text |
| profiles | id: uuid | created_at: timestamptz | public_key: text | username: text  |            |
| friends  | id: uuid | created_at: timestamptz | friender: uuid   | friendee: uuid  |            |

