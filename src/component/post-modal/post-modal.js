import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalSubmit = () => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        Test
      </p>
    </Modal.Content>
  </Modal>
)

export default ModalSubmit
