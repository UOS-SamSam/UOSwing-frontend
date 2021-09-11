import React from 'react';
import { LogicProvider } from './ViewModel/ViewModel';
import { NoticeContextProvider, PadBoxContextProvider, StatisticsContextProvider, UserContextProvider } from './Model';
import { MainRouter } from '../Router';
import { ReportContextProvider } from './Model/ReportModel';

// model 폴더의 파일들과 viewmodel폴더의 파일들, view 내보내는 부분
const Provider = () => {
	const a = 1;
	return (
		<UserContextProvider>
			<NoticeContextProvider>
				<PadBoxContextProvider>
					<ReportContextProvider>
						<StatisticsContextProvider>
							<LogicProvider>
								<MainRouter />
							</LogicProvider>
						</StatisticsContextProvider>
					</ReportContextProvider>
				</PadBoxContextProvider>
			</NoticeContextProvider>
		</UserContextProvider>
	);
};

export default Provider;
