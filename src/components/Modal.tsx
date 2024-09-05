import closeX from "@/assets/close-x.svg";
import styles from "@/css/Modal.module.css";
import classNames from "classnames";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Col, Container, Row } from "react-grid-system";

const strings = {
	modalCloserText: "Exit Modal",
};

type Prop = {
	title?: string;
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export default function Modal({ title, isOpen, onClose, children }: Prop) {
	const titleId = useId();
	const modalRef = useRef<HTMLDivElement | null>(null);

	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (isOpen === true) {
			const opener = document.activeElement;
			return () => {
				opener?.focus(); // Return focus to the previously focused element when modal closes
			};
		}
	}, [isOpen]);

	// Close modal when escape key is pressed
	useEffect(() => {
		const handleEscapeKeyPress = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.body.addEventListener("keydown", handleEscapeKeyPress);
			return () => document.body.removeEventListener("keydown", handleEscapeKeyPress);
		}
	}, [isOpen, onClose]);

	return createPortal(
		<div
			className={classNames(styles.modalBackground, {
				[styles.hidden]: !isOpen,
			})}
			aria-hidden={!isOpen}
		>
			<Container className={styles.modalContainer} fluid={width <= 992}>
				<Row className={styles.modalContainer}>
					<Col
						offset={{ lg: 2, xxl: 2 }}
						lg={8}
						xxl={8}
						className={styles.modalColumn}
					>
						<div
							ref={modalRef}
							className={classNames(styles.modalContent, {
								[styles.hidden]: !isOpen,
							})}
						>
							<button
								className={styles.modalCloser}
								type="button"
								onClick={onClose}
							>
								<img src={closeX} alt={strings.modalCloserText} />
							</button>
							{title ? (
								<h1 id={titleId} className={styles.modalHeader}>
									{title}
								</h1>
							) : null}
							<div className={styles.modalChildren}>{children}</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>,
		document.body
	);
}
