import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
        <form className="space-y-4">
          <Input type="text" placeholder="お名前" />
          <Input type="email" placeholder="メールアドレス" />
          <Textarea placeholder="メッセージ" />
          <Button>送信</Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
