import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
	const scrollRef = useRef(null);
	const newboxRef = useRef(null);
	useGSAP(() => {
		if (!scrollRef.current) return;
		const boxes = gsap.utils.toArray(scrollRef.current.children);
		boxes.forEach((box) => {
			gsap.to(box, {
				x: 500 * (boxes.indexOf(box) + 5),
				rotation: 360,
				borderRadius: '100%',
				stragger: 3,
				scrollTrigger: {
					trigger: box,
					start: 'top 90%',
					end: 'bottom 20%',
					scrub: true,
				},
				ease: 'power1.inOut',
			});
		});
	});

	useGSAP(
		() => {
			if (!newboxRef.current) return;
			gsap.to(newboxRef.current, {
				scrollTrigger: {
					trigger: newboxRef.current,
					start: 'top 70%',
					scrub: true,
				},
				ease: 'power1.inOut',
			});

			gsap.to('#newbox', {
				x: 500,
				opacity: 1,
				ease: 'power1.inOut',
				duration: 5,
			});
			gsap.from('#newbox', {
				opacity: 0,
				ease: 'power1.inOut',
			});
		},
		{ scope: newboxRef }
	);

	return (
		<>
			<div className='flex gap-4 flex-col'>
				<div className='bg-gray-700  min-h-screen w-screen'>
					<div id='block' className='flex '>
						<p id='text' className='text-5xl text-blue-300 '>
							scrooll down
						</p>
					</div>
					<div ref={newboxRef} id='block' className='flex h-screen mb-96'>
						<div
							id='newbox'
							className=' w-[500px] h-[300px] bg-amber-400 text-center rounded-4xl '
						>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic
								architecto adipisci corporis, ea culpa nostrum error tempora
								molestiae. Nostrum dolore tempora tempore pariatur quasi
								accusamus suscipit iste ut hic!
							</p>
						</div>
					</div>

					<div ref={scrollRef} className='py-96'>
						{['green', 'blue', 'red'].map((color) => (
							<div
								id='box'
								className={`flex items-center text-2xl justify-center text-cyan-50 w-[200px] h-[200px] rounded-xl bg-${color}-500`}
							>
								<p>Hello, I'm {color}!</p>
							</div>
						))}
					</div>

					<div className='flex justify-center items-center h-screen bg-gray-700'>
						<p id='text' className='text-5xl text-blue-300 '>
							scrooll up
						</p>
					</div>
				</div>
			</div>
			{/* <main className='py-10 h-screen space-y-5 overflow-y-auto'>
				<h1 className='font-bold text-3xl text-center'>Your Todo</h1>
				<div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6'>
					<AddTodoForm onSubmit={addTodo} />
					<TodoList
						todos={todos}
						onCompletedChange={setTodoCompleted}
						onDelete={deleteTodo}
					/>
				</div>
				<TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
			</main> */}
		</>
	);
}

export default App;
